import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoComponent() {
    const router = useRouter();

    useEffect(() => {
      const timer = setTimeout(() => {
        router.push('/login');
      }, 5000);
      return () => clearTimeout(timer);
    }, );


return (
   <p>Logo</p>
)
}


