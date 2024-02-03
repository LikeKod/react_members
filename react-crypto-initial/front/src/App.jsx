import AppLayout from "./components/layout/AppLayout";
import { LoginForm } from "./components/login-form/LoginForm";
import { CryptoContextProvider } from "./context/crypto-context";
import { useAuth } from "./providers/useAuth";

export default function App() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <div>
          <CryptoContextProvider>
            <AppLayout />
          </CryptoContextProvider>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
