import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryPvorider from "@/util/provider/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "coo",
  description: "보면서 배우는 알고리즘",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReactQueryPvorider>
          <ThemeRegistry>
            <Header />
            <Drawer />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: "background.default",
                ml: "240px",
                mt: "64px",
                p: 3,
              }}
            >
              {children}
            </Box>
          </ThemeRegistry>
        </ReactQueryPvorider>
      </body>
    </html>
  );
}
