import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoComponent() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3100);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <p>Logo</p>
      <span className="loading loading-spinner text-accent"></span>
    </>
  );
}
