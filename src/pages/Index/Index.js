import Banner from "../../components/Banner/Banner";

import "./Index.css";

export default function Index() {
  document.title = "Argent Bank - Home Page";

  return <Banner />;
  //   return (
  //     <>
  //       <Navigation />
  //       <main>
  //         <Banner />
  //         <section className="features">
  //           <FeatureItem
  //             iconUrl={iconChat}
  //             title={featureTitleChat}
  //             text={featureTextChat}
  //           />
  //           <FeatureItem
  //             iconUrl={iconMoney}
  //             title={featureTitleMoney}
  //             text={featureTextMoney}
  //           />
  //           <FeatureItem
  //             iconUrl={iconSecurity}
  //             title={featureTitleSecurity}
  //             text={featureTextSecurity}
  //           />
  //         </section>
  //       </main>
  //       <Footer />
  //     </>
  //   );
}
