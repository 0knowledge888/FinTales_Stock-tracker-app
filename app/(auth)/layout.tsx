
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
   <main className="auth-layout">
    <section className="auth-left-section scrollbar-hide-default">
       <Link href="/" className="auth-logo">
      <Image src="/assets/icons/fintalesgo.png" alt="FinTales Logo" width={320} height={120} className="w-[120px] h-auto" />
       </Link>
    

    <div className="pb-6 lg:pb-8 flex-1">{children}</div>
    </section>

    <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
          "Depuis que j’utilise FinTales, le suivi de mes investissements boursiers et de mes cryptos est devenu un vrai plaisir. En quelques minutes, je peux visualiser toutes les tendances importantes grâce au dashboard clair et moderne, et surtout, je ne manque plus aucune info essentielle grâce aux alertes personnalisées."
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
            <cite className="auth-testimonial-author">Warren B.</cite>
            <p className="max-md:text-xs text-gray-500">Investiseur</p>
            </div>
            <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Image
        src="/assets/icons/star.svg"
        alt="Star"
        width={20}
        height={20}
        key={star}
        className="w-5 h-5"
      />
    ))}
          </div>
          </div>
        </div>
        <div className="flex-1 relative">
        <Image src="/assets/images/ftdashboard.png" alt="Dashboard preview" width={1440} height={1150} className="auth-dashboard-preview absolute top-0"/>
        </div>
    </section>
   </main>
  );
}
export default Layout;