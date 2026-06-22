import ScrollInit from '@/components/ScrollInit'

export default function Home() {
  return (
    <>
      <ScrollInit />

      {/* NAV */}
      <nav>
        <a href="#" className="logo">Le Collectif<span>.</span></a>
        <a href="#pricing" className="cta-nav">Rejoindre le collectif →</a>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-eyebrow">Le club des indépendants qui passent à l&apos;action</div>
        <h1 className="display">
          <span className="h1-line">Tu n&apos;as pas besoin</span>
          <span className="h1-line">d&apos;une formation</span>
          <span className="h1-line"><span className="strike">de plus.</span></span>
        </h1>
        <p className="hero-sub">
          Tu as besoin d&apos;un cadre, d&apos;un réseau et de pairs qui avancent avec toi. Le Collectif des Indés est fait pour ça.
        </p>
        <div className="hero-actions">
          <a href="#pricing" className="btn-primary">Je rejoins : 99€ /mois</a>
          <a href="#concept" className="btn-ghost">Découvrir le concept ↓</a>
        </div>
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>99€/mois · Sans engagement &nbsp;·&nbsp; <strong>Lancé dans le Sud</strong> : Marseille, Toulon, et bientôt toute la France</span>
        </div>
      </div>

      {/* PAIN */}
      <section className="pain">
        <div className="container">
          <div className="section-label" style={{color:'#FF3D00'}}>Le problème</div>
          <div className="pain-grid">
            <div className="pain-card fade-up">
              <div className="pain-number">01</div>
              <h3>Tu sais quoi faire.<br/>Mais tu ne le fais pas.</h3>
              <p>Le problème n&apos;est pas le manque d&apos;information. Tu as déjà regardé les vidéos, acheté les formations, pris des notes. Mais l&apos;action, elle, n&apos;arrive jamais vraiment.</p>
            </div>
            <div className="pain-card fade-up">
              <div className="pain-number">02</div>
              <h3>Tu t&apos;es payé des formations. Elles prennent la poussière.</h3>
              <p>Des centaines d&apos;euros investis dans du contenu que tu n&apos;as pas terminé. Pas par manque de volonté. Par manque de cadre, de structure et de quelqu&apos;un pour te tenir responsable.</p>
            </div>
            <div className="pain-card fade-up">
              <div className="pain-number">03</div>
              <h3>Tu bosses seul. Et tu prends toutes les décisions seul.</h3>
              <p>Acquisition, clients, administratif, service après-vente. Quatre métiers en un, sans équipe, sans recul, sans pair pour te dire quand tu fonces dans le mur.</p>
            </div>
          </div>
          <div className="pain-statement">
            <h2 className="display">L&apos;isolement, c&apos;est le vrai ennemi du freelance.</h2>
            <p>Un entrepreneur seul va vite. Un entrepreneur <strong>bien entouré</strong> va loin. La différence entre ceux qui construisent quelque chose de stable et les autres, c&apos;est rarement la compétence. C&apos;est <strong>l&apos;entourage et le cadre</strong>.</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="concept">
        <div className="container">
          <div className="solution-intro fade-up">
            <div className="section-label">La solution</div>
            <h2 className="display">Le Collectif des Indés n&apos;est pas une formation.</h2>
            <p>C&apos;est un <strong>club structuré pour te faire avancer</strong> : pas pour t&apos;apprendre des choses de plus. Un cadre clair, un réseau d&apos;indépendants qui jouent le même jeu que toi, et des outils prêts à l&apos;emploi pour que l&apos;action remplace enfin l&apos;intention.</p>
          </div>
          <div className="features-grid fade-up">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Un plan. Pas un catalogue de contenu.</h3>
              <p>Dès ton arrivée, tu passes un audit IA complet de ton business. Tu repars avec un plan d&apos;action personnalisé. Tu n&apos;as plus à te demander par où commencer : tu suis le plan.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Des pairs, pas un professeur.</h3>
              <p>Le collectif, c&apos;est des indépendants comme toi qui avancent au même rythme. L&apos;entraide remplace l&apos;isolement. Le collectif te pousse quand tu flanche : et tu fais pareil pour eux.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>De l&apos;exécution, pas de la théorie.</h3>
              <p>Chaque atelier collectif est centré sur l&apos;application. On ne parle pas de ce qu&apos;il faudrait faire : on le fait ensemble. Tu repars à chaque session avec quelque chose de concret à mettre en place.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>L&apos;IA comme outil, pas comme sujet.</h3>
              <p>Le prompt engineering n&apos;est pas un module à part. C&apos;est l&apos;outil qu&apos;on utilise à chaque étape : pour créer du contenu, prospecter, structurer son business. Tu l&apos;appliques directement, dès le début.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars" id="programme">
        <div className="container">
          <div className="pillars-header fade-up">
            <h2 className="display">Un parcours. Trois piliers. Zéro superflu.</h2>
            <p>Le programme est structuré autour des trois leviers qui font tenir un business solo dans la durée. Pas de trimestres, pas de modules à débloquer. Un parcours continu, avec l&apos;IA comme moteur permanent.</p>
          </div>
          <div className="pillars-grid">
            <div className="pillar fade-up">
              <span className="pillar-tag">Pilier 01</span>
              <h3>Acquisition</h3>
              <ul>
                <li>Fondations de ta communication</li>
                <li>Profil LinkedIn qui attire</li>
                <li>Ligne éditoriale et contenu régulier</li>
                <li>Création de leads magnets</li>
                <li>Groupe d&apos;entraide stratégique</li>
                <li>Prospection et DM ciblés</li>
              </ul>
            </div>
            <div className="pillar fade-up">
              <span className="pillar-tag">Pilier 02</span>
              <h3>Structuration</h3>
              <ul>
                <li>Cartographie du parcours client</li>
                <li>Mise en place CRM sur Notion</li>
                <li>Automatisation des relances</li>
                <li>Suivi de devis et facturation</li>
                <li>Systèmes qui tournent sans toi</li>
                <li>Templates et process prêts à l&apos;emploi</li>
              </ul>
            </div>
            <div className="pillar fade-up">
              <span className="pillar-tag">Pilier 03</span>
              <h3>Prompt Engineering</h3>
              <ul>
                <li>Maîtriser l&apos;IA comme outil quotidien</li>
                <li>Générer du contenu en quelques minutes</li>
                <li>Automatiser ses prises de contact</li>
                <li>Accélérer l&apos;acquisition et la structuration</li>
                <li>Prompts prêts à l&apos;emploi fournis</li>
                <li>Intégré à chaque étape du parcours</li>
              </ul>
            </div>
          </div>
          <div className="pillar-ia fade-up">
            <div>
              <h3>L&apos;IA est transversale à tout.</h3>
              <p>Ce n&apos;est pas un module bonus. C&apos;est le moteur qui tourne derrière chaque pilier. Tu l&apos;utilises dès le premier jour pour aller plus vite sur tout ce que tu fais.</p>
            </div>
            <span className="ia-badge">Intégré partout</span>
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section>
        <div className="container">
          <div className="section-label">Le parcours</div>
          <h2 className="display" style={{fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '16px'}}>Ce que tu vis dès le premier jour.</h2>
          <p style={{fontSize: '17px', color: 'var(--grey)', maxWidth: '580px'}}>Un démarrage rapide, un plan clair, et une progression continue. Voilà ce que le collectif t&apos;apporte dans l&apos;ordre.</p>
          <div className="parcours-timeline">
            <div className="parcours-step fade-up">
              <div className="step-meta">
                <span className="step-timing">J1 à J7</span>
                <span className="step-num">01</span>
              </div>
              <div className="step-content">
                <h3>Sprint Fondations</h3>
                <p>Dès ton arrivée, tu passes un audit IA complet de ton business. En une semaine, tu clarifies ton offre, définis ton client idéal et poses ton positionnement. Tu repars avec un plan d&apos;action personnalisé : et tu n&apos;as plus à te demander par où commencer.</p>
                <div className="step-tags">
                  <span className="tag">Audit IA</span>
                  <span className="tag">Offre clarifiée</span>
                  <span className="tag">ICP défini</span>
                  <span className="tag">Plan d&apos;action</span>
                </div>
              </div>
            </div>
            <div className="parcours-step fade-up">
              <div className="step-meta">
                <span className="step-timing">En continu</span>
                <span className="step-num">02</span>
              </div>
              <div className="step-content">
                <h3>Acquisition en mouvement</h3>
                <p>Tu construis ta présence LinkedIn étape par étape : profil optimisé, ligne éditoriale définie avec l&apos;IA, leads magnets créés, contenu régulier publié. Puis tu passes à la prospection active avec des scripts et des séquences prêts à l&apos;emploi.</p>
                <div className="step-tags">
                  <span className="tag">LinkedIn</span>
                  <span className="tag">Contenu IA</span>
                  <span className="tag">Leads Magnets</span>
                  <span className="tag">Prospection</span>
                </div>
              </div>
            </div>
            <div className="parcours-step fade-up">
              <div className="step-meta">
                <span className="step-timing">En parallèle</span>
                <span className="step-num">03</span>
              </div>
              <div className="step-content">
                <h3>Structuration du business</h3>
                <p>Tu cartographies ton parcours client et tu mets en place un CRM Notion prêt à l&apos;emploi. Tu automatises les relances, le suivi de devis, la facturation. Progressivement, des systèmes se mettent en place : et ton business tourne même quand tu n&apos;y penses pas.</p>
                <div className="step-tags">
                  <span className="tag">Parcours client</span>
                  <span className="tag">CRM Notion</span>
                  <span className="tag">Automatisations</span>
                  <span className="tag">Systèmes</span>
                </div>
              </div>
            </div>
            <div className="parcours-step fade-up">
              <div className="step-meta">
                <span className="step-timing">Tout au long</span>
                <span className="step-num">04</span>
              </div>
              <div className="step-content">
                <h3>Réseau et accountability</h3>
                <p>La communauté tourne en distanciel au quotidien pour tous les membres de France. Et régulièrement, on se retrouve en présentiel : d&apos;abord à Marseille et Toulon, puis progressivement dans de nouvelles villes pour des événements networking et des temps forts collectifs.</p>
                <div className="step-tags">
                  <span className="tag">Communauté France entière</span>
                  <span className="tag">Ateliers collectifs</span>
                  <span className="tag">Marseille / Toulon</span>
                  <span className="tag">Expansion nationale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDES */}
      <section className="includes">
        <div className="container">
          <div className="section-label" style={{color: '#FF3D00'}}>Ce qui est inclus</div>
          <h2 className="display">Tout ce qu&apos;il te faut pour avancer. Rien de superflu.</h2>
          <div className="includes-grid fade-up">
            <div className="include-item">
              <span className="include-check">🎯</span>
              <h4>Audit IA + Plan d&apos;action</h4>
              <p>Un état des lieux complet de ton business dès l&apos;arrivée, avec un plan personnalisé et concret pour la suite.</p>
            </div>
            <div className="include-item">
              <span className="include-check">📈</span>
              <h4>Parcours Acquisition complet</h4>
              <p>LinkedIn, leads magnets, groupe d&apos;entraide, contenu IA, prospection. Tout le système, étape par étape.</p>
            </div>
            <div className="include-item">
              <span className="include-check">⚙️</span>
              <h4>Parcours Structuration</h4>
              <p>Parcours client, CRM Notion prêt à l&apos;emploi, automatisations. Ton business qui tourne même sans toi.</p>
            </div>
            <div className="include-item">
              <span className="include-check">🤖</span>
              <h4>Prompt Engineering intégré</h4>
              <p>Prompts prêts à l&apos;emploi à chaque étape. Tu gagnes du temps sur tout, dès le premier jour.</p>
            </div>
            <div className="include-item">
              <span className="include-check">👥</span>
              <h4>Ateliers collectifs (80% distanciel)</h4>
              <p>Des sessions régulières pour appliquer, pas juste écouter. En groupe, avec de l&apos;accountability réelle.</p>
            </div>
            <div className="include-item">
              <span className="include-check">📍</span>
              <h4>Événements présentiels</h4>
              <p>Lancé dans le Sud (Marseille, Toulon), le collectif s&apos;étend progressivement dans toute la France avec des événements dans de nouvelles villes.</p>
            </div>
            <div className="include-item">
              <span className="include-check">🔗</span>
              <h4>Communauté permanente</h4>
              <p>Entraide, questions, partages au quotidien. Tu n&apos;es plus jamais seul face à un problème ou une décision.</p>
            </div>
            <div className="include-item">
              <span className="include-check">🎤</span>
              <h4>Session expert invité</h4>
              <p>Un éclairage complémentaire par un expert extérieur sur une thématique clé du business solo.</p>
            </div>
            <div className="include-item">
              <span className="include-check">🤝</span>
              <h4>Événement networking exclusif</h4>
              <p>Un temps dédié aux mises en relation concrètes et aux opportunités d&apos;affaires entre membres.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section>
        <div className="container">
          <div className="section-label">Les fondateurs</div>
          <h2 className="display" style={{fontSize: 'clamp(32px, 4vw, 48px)', maxWidth: '640px', marginBottom: '16px'}}>Le terrain et la data. Le vécu et la méthode.</h2>
          <p style={{fontSize: '17px', color: 'var(--grey)', maxWidth: '600px'}}>Le Collectif n&apos;est pas né d&apos;une idée. Il est né d&apos;une histoire vraie : un frère qui a tout construit seul depuis 2019, un frère dans la data depuis Aix-Marseille jusqu&apos;à EDF. Ce qu&apos;ils ont appris, tu n&apos;auras pas à le découvrir seul.</p>
          <div className="founders-grid fade-up">
            <div className="founder-card">
              <span className="founder-role">Marketing · Closing · Acquisition</span>
              <h3>Yacoub Keita</h3>
              <p>En 2019, il prépare une boutique de vêtements pendant un an. En 2020, le Covid efface tout. Il pivote, apprend le marketing digital seul et atteint ses premiers 10 000€/mois. Il lance ensuite une marque de montres par crowdfunding, maîtrise le closing et se construit une communauté de 3 000 abonnés LinkedIn.<br/>En 2025, le solo lui coûte sa santé : surmenage, diagnostic de diabète. Le Collectif est sa réponse directe à tout ça. Il connaît le chemin parce qu&apos;il l&apos;a payé.</p>
            </div>
            <div className="founder-card">
              <span className="founder-role">Data · IA · Automatisation</span>
              <h3>Mohamed Keita</h3>
              <p>Master en Mathématiques Appliquées, Aix-Marseille. Data Scientist, Data Engineer, MLOps Engineer. Aujourd&apos;hui Consultant Data/IA chez Talan en mission chez EDF : agents IA, LLM (Mistral AI, LangChain), pipelines ETL, automatisations en production.<br/>Co-fondateur de Data Afrique Hub (200+ participants formés), enseignant à Le Wagon Nice. Ses analyses data ont directement nourri les décisions business de son frère pendant des années. Aujourd&apos;hui, il les met au service de tous les membres.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="pricing-inner">
            <div className="pricing-copy fade-up">
              <div className="section-label">Tarif</div>
              <h2 className="display">Un investissement. Pas une dépense de plus.</h2>
              <p>99€/mois, sans engagement. Tu pars quand tu veux : mais on parie que tu ne voudras pas. Le collectif démarre dans le Sud (Marseille, Toulon) et s&apos;étend progressivement dans toute la France avec des événements dans de nouvelles villes.</p>
              <div className="pricing-urgency">
                <span className="badge-dot"></span>
                Places limitées pour garder un collectif à taille humaine.
              </div>
            </div>
            <div className="pricing-card fade-up">
              <div className="pricing-card-top">
                <div className="price-label">Sans engagement · Résiliable à tout moment</div>
                <div className="price-amount">
                  <span className="currency">€</span>
                  <span className="number">99</span>
                  <span className="period">/mois</span>
                </div>
                <div className="price-old">Disponible partout en France · Événements Sud en priorité</div>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-list">
                  <li>Audit IA de ton business à l&apos;entrée</li>
                  <li>Plan d&apos;action personnalisé dès J1</li>
                  <li>Parcours Acquisition complet</li>
                  <li>Parcours Structuration + CRM Notion</li>
                  <li>Prompt Engineering intégré partout</li>
                  <li>Ateliers collectifs réguliers (distanciel)</li>
                  <li>Communauté permanente : toute la France</li>
                  <li>Événements présentiels (Marseille, Toulon + autres villes)</li>
                  <li>Événement networking exclusif</li>
                  <li>Session avec expert invité</li>
                  <li>Sans engagement : tu pars quand tu veux</li>
                </ul>
                <a href="#" className="btn-full">Je rejoins le Collectif →</a>
                <p className="pricing-note">99€/mois · Sans engagement · Paiement sécurisé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container" style={{textAlign: 'center'}}>
          <div className="section-label" style={{color: '#FF3D00', justifyContent: 'center', display: 'flex'}}>Dernière chance</div>
          <h2 className="display fade-up">Arrête de bosser seul.<br/>Commence à avancer.</h2>
          <p className="fade-up">Les places fondateurs sont limitées. Le tarif monte après le lancement.</p>
          <a href="#pricing" className="btn-primary fade-up">Je rejoins le Collectif des Indés →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="logo" style={{color: '#444'}}>Le Collectif<span style={{color: 'var(--red)'}}>.</span></span>
        <span>Marseille · Toulon · Toute la France &nbsp;·&nbsp; contact@[à compléter]</span>
      </footer>
    </>
  )
}
