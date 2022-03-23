import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }

  }

  // 사용자의 로그인 상태 변경에 대한 관찰 
  onAuthChange(onUserChaenged) {
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChaenged(user);
    });
  }

  logout() {
    this.firebaseAuth.signOut();
  }

}

export default AuthService;
