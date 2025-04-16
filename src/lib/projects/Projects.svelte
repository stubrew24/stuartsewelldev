<script>
  import ProjectCard from "./ProjectCard.svelte";
  import cafe53 from "./cafe53.jpeg";
  import hangman from "./hangman.jpeg";
  import junomidwives from "./junomidwives.jpg";

  const projectsCol1 = [
    {
      image: cafe53,
      title: "Cafe 53",
      description:
        "Homepage for an independent restaurant in Latvia. Full CMS features, hosted on Firebase and using Google Cloud Translation API to translate between English, Latvian and Russian.",
    },
  ];
  const projectsCol2 = [
    {
      image: junomidwives,
      title: "Juno Midwives",
      description:
        "Juno Midwives asked me to rebuild their website with a focus on improving the design and making it easy for them to make changes to the content themselves. I used Nuxt and Vuetify for the frontend and Sanity.io for the CMS.",
      link: "https://test.junomidwives.co.uk",
      github: "https://github.com/junomidwives/frontend",
    },
    {
      image: hangman,
      title: "Hangman",
      description:
        "Word guessing game. Initially built in TypeScript then converted to React Native and hosted on the Google Play Store.",
      link: "https://hangman.stuartsewell.dev/",
      github: "https://github.com/stubrew24/hangman",
    },
  ];
</script>

<section id="projects">
  <div class="col-1">
    <span class="text-overline">MY PROJECTS</span>
    <h2 class="text-heading-2">Select projects I've worked on.</h2>
    {#each projectsCol1 as project}
      <ProjectCard {...project} />
    {/each}
  </div>
  <div class="col-2">
    {#each projectsCol2 as project}
      <ProjectCard {...project} />
    {/each}
  </div>
</section>

<style>
  section {
    display: flex;
    padding: 120px 72px;
    gap: 24px;
  }

  .text-overline {
    color: var(--light-grey);
  }

  .col-1,
  .col-2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: 768px) {
    section {
      padding: 64px 20px;
      flex-direction: column;
    }
  }
</style>
