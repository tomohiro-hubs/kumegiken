import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

const githubPagesBasePath = process.env.GITHUB_PAGES === "true" ? "/kumegiken" : "";

export const metadata = {
  title: "株式会社久米技建 | KUME GIKEN Co., Ltd.",
  description: "大規模修繕事業・防水事業・外壁塗装・水中点検を自社体制で提供する専門会社",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Noto+Sans+JP:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
        {githubPagesBasePath ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){var base='${githubPagesBasePath}';var attrRegex=/url\\((['"]?)\\/images\\//g;var startsWithImages=function(v){return typeof v==='string'&&v.indexOf('/images/')===0;};var remap=function(v){return startsWithImages(v)?base+v:v;};var fixStyle=function(el){var style=el.getAttribute('style');if(style&&style.indexOf('/images/')!==-1){el.setAttribute('style',style.replace(attrRegex,'url($1'+base+'/images/'));}};var fixElement=function(el){if(!el||el.nodeType!==1)return;var src=el.getAttribute('src');if(startsWithImages(src)){el.setAttribute('src',base+src);}var srcset=el.getAttribute('srcset');if(srcset&&srcset.indexOf('/images/')!==-1){el.setAttribute('srcset',srcset.replace(/\\s\\/images\\//g,' '+base+'/images/').replace(/^\\/images\\//,base+'/images/'));}fixStyle(el);if(el.querySelectorAll){el.querySelectorAll('[src^="/images/"],[srcset*="/images/"],[style*="/images/"]').forEach(function(node){var nodeSrc=node.getAttribute('src');if(startsWithImages(nodeSrc)){node.setAttribute('src',base+nodeSrc);}var nodeSrcset=node.getAttribute('srcset');if(nodeSrcset&&nodeSrcset.indexOf('/images/')!==-1){node.setAttribute('srcset',nodeSrcset.replace(/\\s\\/images\\//g,' '+base+'/images/').replace(/^\\/images\\//,base+'/images/'));}fixStyle(node);});}};fixElement(document.documentElement);new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.type==='attributes'){fixElement(mutation.target);return;}mutation.addedNodes.forEach(function(node){fixElement(node);});});}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['src','srcset','style']});})();`,
            }}
          />
        ) : null}
      </head>
      <body>
        <Header />
        <ScrollRevealProvider>
          {children}
        </ScrollRevealProvider>
        <Footer />
      </body>
    </html>
  );
}
