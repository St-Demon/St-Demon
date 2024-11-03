// app/_app.jsx
import { SocketProvider } from "@/components/socket-provider";

function MyApp({ Component, pageProps }) {
  return (
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  );
}

export default MyApp;
