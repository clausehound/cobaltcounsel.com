// Archiving this component for future use
h(
  ContentContainer,
  {
    content: true,
    grid: true,
    gridSplit: true,
  },
  h(Image, null, h("img", { src: languageSvg })),
  h(
    ContentBlock,
    null,
    h(Subheading, null, "Understand and Translate"),
    h("h2", null, "Translate legalese to legal understanding"),
    h(
      "p",
      null,
      "Hide the contract details for simple summaries and abstracts. Compare 2, 3, or 10 contracts against each other at once. See what’s included in similar contracts that you may want to consider for yours."
    ),
    h(
      "p",
      null,
      "Ever try to copy + paste a contract into an online language translator, then translate it back? I'd bet you'd be unhappy with the results. Those translators don't understand legal language. We do. Our machine learning can load and understand your English contract and convert every clause into a legal concept. We'll then instantly make a human-written translation for any target language in our system (English, French, Arabic), or help you write new translations."
    ),
    h(
      Button,
      {
        to: "#checkout",
      },
      "Get Started"
    )
  )
);
