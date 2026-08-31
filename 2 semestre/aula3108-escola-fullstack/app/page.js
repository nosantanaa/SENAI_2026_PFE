import styles from "./page.module.css";

const stats = [
  { label: "Alunos", value: "2.500+" },
  { label: "Professores", value: "180" },
  { label: "Projetos", value: "95" },
  { label: "Aprovação", value: "98%" },
];

const features = [
  {
    title: "Ensino de qualidade",
    text: "Ambiente acolhedor com foco no desenvolvimento acadêmico, emocional e social.",
  },
  {
    title: "Tecnologia no dia a dia",
    text: "Laboratórios, salas digitais e ferramentas que conectam aprendizagem e inovação.",
  },
  {
    title: "Atividades extracurriculares",
    text: "Esportes, cultura, projetos e eventos que ampliam a experiência escolar.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    alt: "Sala de aula com alunos",
    title: "Aprendizado dinâmico",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    alt: "Alunos em grupo",
    title: "Trabalho em equipe",
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    alt: "Estudantes em biblioteca",
    title: "Ambiente inspirador",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>E</span>
          <span>Escola Futuro</span>
        </div>

        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#estrutura">Estrutura</a>
          <a href="#atividades">Atividades</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#contato" className={styles.headerButton}>Fale conosco</a>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} id="sobre">
          <div className={styles.heroContent}>
            <span className={styles.badge}>Educação que transforma</span>
            <h1>Onde conhecimento, cultura e futuro se encontram.</h1>
            <p>
              A Escola Futuro prepara estudantes para o mundo com ensino inovador,
              professores dedicados e uma comunidade que valoriza cada conquista.
            </p>

            <div className={styles.actions}>
              <a href="#estrutura" className={styles.primaryButton}>Conheça a escola</a>
              <a href="#atividades" className={styles.secondaryButton}>Veja as atividades</a>
            </div>

            <div className={styles.stats}>
              {stats.map((item) => (
                <div key={item.label} className={styles.statItem}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.imageStack}>
              <img
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=900&q=80"
                alt="Estudante sorrindo em sala de aula"
                className={styles.mainImage}
              />
              <div className={styles.floatCard}>
                <span>Próximo evento</span>
                <strong>Feira de Ciências</strong>
                <small>15 de setembro</small>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection} id="estrutura">
          <div className={styles.sectionHeading}>
            <span className={styles.kicker}>Nossos diferenciais</span>
            <h2>Uma experiência escolar completa</h2>
          </div>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <div className={styles.iconCircle}>✦</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.gallerySection} id="atividades">
          <div className={styles.sectionHeading}>
            <span className={styles.kicker}>Nossa rotina</span>
            <h2>Momentos que inspiram e fortalecem o aprendizado</h2>
          </div>

          <div className={styles.galleryGrid}>
            {gallery.map((item) => (
              <figure key={item.title} className={styles.galleryCard}>
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection} id="contato">
          <div>
            <span className={styles.kicker}>Faça parte</span>
            <h2>Seu filho merece um ambiente de excelência.</h2>
          </div>
          <a href="mailto:contato@escolafuturo.com.br" className={styles.primaryButton}>Entre em contato</a>
        </section>
      </main>
    </div>
  );
}
