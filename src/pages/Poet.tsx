import { useState } from "react";
import { Container, Row, Col, Button, Badge, Form } from "react-bootstrap";
import poetHero from "../assets/poet.jpeg";
import "../styles/Poet.css";
import fiveamCover from "../assets/fiveamcover.jpeg";
import romeCover from "../assets/romecover.jpeg";
import oldGuitaristCover from "../assets/theoldguitaristcover.jpeg";
import stillYouCover from "../assets/stillyoucover.jpeg";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: "thoughts" | "poems";
  date: string;
  readTime: string;
};

const Poet = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "thoughts" | "poems">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Weight of Words",
      content: `There's something sacred about the moment when a thought becomes a word, when silence breaks into meaning. 

I've been thinking about the responsibility we carry as writers, as people who shape language into bridges between hearts. Every poem I write, every reflection I share, carries the weight of someone else's understanding.

In the early morning hours, when the world is still quiet and the mind is most honest, I find myself asking: what do my words do in the world? Do they heal or harm? Do they build understanding or create distance?

The answer, I think, lies not in perfection but in intention. In the willingness to be vulnerable, to be wrong, to be human in a world that often demands otherwise.`,
      excerpt: "There's something sacred about the moment when a thought becomes a word, when silence breaks into meaning...",
      category: "thoughts",
      date: "2024-09-05",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Morning Coffee",
      content: `Steam rises like prayers
from the cup between my palms—
morning's first communion.

The world awakens slowly,
but I am already here,
witness to the quiet miracle
of another day beginning.

In this sacred pause
between sleep and waking,
I remember who I am
beneath all the noise.`,
      excerpt: "Steam rises like prayers from the cup between my palms—morning's first communion...",
      category: "poems",
      date: "2024-09-03",
      readTime: "1 min read"
    },
    {
      id: 3,
      title: "On Heritage and Home",
      content: `Growing up between cultures teaches you that home isn't always a place—sometimes it's a feeling, a language, a way of understanding the world that exists in the spaces between belonging.

My Haitian roots run deep, carrying stories of resilience that my grandparents whispered into my ear during long summer evenings in Port-au-Prince. My Puerto Rican upbringing shaped my understanding of community, of how music and food and laughter can heal wounds that words cannot touch.

Being a bridge between worlds means carrying multiple truths simultaneously. It means understanding that identity isn't singular—it's a conversation between all the parts of yourself, past and present, inherited and chosen.

Today, when people ask me where I'm from, I don't give them geography. I give them poetry. Because that's where I truly live—in the language that encompasses all of me.`,
      excerpt: "Growing up between cultures teaches you that home isn't always a place—sometimes it's a feeling, a language...",
      category: "thoughts",
      date: "2024-08-28",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "City Rain",
      content: `The city wears rain
like a well-loved coat—
familiar, comfortable,
transforming.

Puddles become mirrors
reflecting neon dreams
and the hurried footsteps
of people going somewhere
important.

But I stop here,
in the middle of it all,
to watch the water
wash yesterday away.`,
      excerpt: "The city wears rain like a well-loved coat—familiar, comfortable, transforming...",
      category: "poems",
      date: "2024-08-25",
      readTime: "1 min read"
    },
    {
      id: 5,
      title: "The Art of Listening",
      content: `In our age of constant noise, listening has become a revolutionary act. Not just hearing—anyone can do that—but truly listening. The kind that requires you to quiet your own mind, to resist the urge to formulate a response while someone else is speaking.

I've learned that the best conversations happen not when we're trying to be heard, but when we're genuinely curious about what others have to say. There's wisdom in every story, even the ones that challenge our own beliefs.

Listening taught me that poetry isn't just about writing—it's about receiving. Receiving the world as it is, in all its beauty and brokenness, and then finding words worthy of what we've witnessed.

So today, I challenge you: listen to someone who sees the world differently than you do. Not to change their mind, but to understand their heart. You might be surprised by what you learn about both of you.`,
      excerpt: "In our age of constant noise, listening has become a revolutionary act. Not just hearing—anyone can do that...",
      category: "thoughts",
      date: "2024-08-20",
      readTime: "3 min read"
    },
    {
      id: 6,
      title: "Silence",
      content: `Between words
lives the truth
we're too afraid
to speak.

In the pause
before confession,
in the breath
before goodbye,
in the space
where love
learns its name.

Silence isn't empty—
it's full
of everything
we almost said.`,
      excerpt: "Between words lives the truth we're too afraid to speak...",
      category: "poems",
      date: "2024-08-15",
      readTime: "1 min read"
    }
  ];

  const books = [
    {
      title: "Five AM",
      cover: fiveamCover,
      intro: "Poems born in the quiet, restless early hours of dawn.",
      amazonLink: "https://amazon.com/five-am-ralph-ulysse",
    },
    {
      title: "Rome",
      cover: romeCover,
      intro: "A lyrical journey through the eternal city's hidden moments.",
      amazonLink: "https://amazon.com/rome-ralph-ulysse",
    },
    {
      title: "The Old Guitarist",
      cover: oldGuitaristCover,
      intro: "Verses inspired by Picasso's painting — blue, broken, beautiful.",
      amazonLink: "https://amazon.com/old-guitarist-ralph-ulysse",
    },
    {
      title: "Still You",
      cover: stillYouCover,
      intro: "A deeply personal collection about love, distance, and return.",
      amazonLink: "https://amazon.com/still-you-ralph-ulysse",
    },
  ];

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white" }}>
      {/* Hero */}
      <section
        className="poet-hero d-flex flex-column align-items-center justify-content-center text-center position-relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10,15,44,0.7), rgba(25,25,112,0.5)), url(${poetHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "75vh",
        }}
      >
        <div className="hero-literary-pattern"></div>
        <div className="poet-hero-content" data-aos="fade-up">
          <div className="mb-4">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3 poet-badge-pulse">
              <i className="bi bi-journal-text me-2"></i>BLOG & POETRY
            </Badge>
          </div>
          <h1
            className="poet-title mb-4"
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 400,
              letterSpacing: "2px",
            }}
          >
            Words & Reflections
          </h1>
          <p 
            className="poet-subtitle mb-5"
            style={{ 
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              maxWidth: "600px",
              margin: "0 auto 2rem"
            }}
          >
            "A space for free-flowing thoughts and poetry — where silence speaks louder than noise."
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="filter-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between mb-4">
                <div className="d-flex gap-2 flex-wrap">
                  <Button
                    variant={selectedCategory === "all" ? "warning" : "outline-warning"}
                    className="filter-btn"
                    onClick={() => setSelectedCategory("all")}
                  >
                    <i className="bi bi-grid me-2"></i>
                    All Posts ({blogPosts.length})
                  </Button>
                  <Button
                    variant={selectedCategory === "thoughts" ? "info" : "outline-info"}
                    className="filter-btn"
                    onClick={() => setSelectedCategory("thoughts")}
                  >
                    <i className="bi bi-lightbulb me-2"></i>
                    Thoughts ({blogPosts.filter(p => p.category === "thoughts").length})
                  </Button>
                  <Button
                    variant={selectedCategory === "poems" ? "success" : "outline-success"}
                    className="filter-btn"
                    onClick={() => setSelectedCategory("poems")}
                  >
                    <i className="bi bi-journal-text me-2"></i>
                    Poems ({blogPosts.filter(p => p.category === "poems").length})
                  </Button>
                </div>
                <Form.Control
                  type="search"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ maxWidth: "300px" }}
                  className="search-input"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="blog-posts-section pb-5">
        <Container>
          <Row className="g-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <Col lg={6} key={post.id}>
                  <article
                    className="blog-post-card h-100"
                    data-aos="fade-up"
                    data-aos-delay={idx * 150}
                  >
                    <div className="blog-post-header">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <Badge 
                          bg={post.category === "poems" ? "success" : "info"}
                          className="category-badge"
                        >
                          <i className={`bi ${post.category === "poems" ? "bi-journal-text" : "bi-lightbulb"} me-2`}></i>
                          {post.category === "poems" ? "Poetry" : "Thoughts"}
                        </Badge>
                        <div className="blog-meta text-muted">
                          <small>
                            <i className="bi bi-calendar3 me-1"></i>
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </small>
                          <small className="ms-3">
                            <i className="bi bi-clock me-1"></i>
                            {post.readTime}
                          </small>
                        </div>
                      </div>
                      <h2 className="blog-post-title">{post.title}</h2>
                      <p className="blog-post-excerpt">{post.excerpt}</p>
                    </div>
                    <div className="blog-post-content">
                      <div className={`content-preview ${post.category === "poems" ? "poem-format" : ""}`}>
                        {post.content.split('\n').slice(0, post.category === "poems" ? 8 : 4).map((line, lineIdx) => (
                          <span key={lineIdx}>
                            {line}
                            {lineIdx < (post.category === "poems" ? 8 : 4) - 1 && <br />}
                          </span>
                        ))}
                        {post.content.split('\n').length > (post.category === "poems" ? 8 : 4) && (
                          <span className="text-muted">... continue reading</span>
                        )}
                      </div>
                    </div>
                    <div className="blog-post-footer mt-auto pt-3">
                      <Button 
                        variant="outline-warning" 
                        size="sm"
                        className="read-more-btn"
                      >
                        <i className="bi bi-arrow-right me-2"></i>
                        Read Full {post.category === "poems" ? "Poem" : "Post"}
                      </Button>
                    </div>
                    <div className="blog-post-glow"></div>
                  </article>
                </Col>
              ))
            ) : (
              <Col xs={12}>
                <div className="text-center py-5">
                  <i className="bi bi-search fs-1 text-muted mb-3"></i>
                  <h3 className="text-muted">No posts found</h3>
                  <p className="text-muted">Try adjusting your search or filter criteria.</p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      {/* Books on Amazon */}
      <section className="py-5 books-section">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3">
              <i className="bi bi-journals me-2"></i>PUBLISHED BOOKS
            </Badge>
            <h2
              className="section-title mb-4"
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                background: "linear-gradient(135deg, #daa520, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Available on Amazon
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Four collections of poetry exploring love, loss, identity, and the spaces between silence and song. Available in digital and print editions.
            </p>
          </div>
          <Row className="g-4 justify-content-center">
            {books.map((book, idx) => (
              <Col md={6} lg={3} key={idx}>
                <div
                  className="amazon-book-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <div className="book-cover-container">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="book-cover"
                    />
                  </div>
                  <div className="book-card-body">
                    <h4 className="book-title">{book.title}</h4>
                    <p className="book-intro">{book.intro}</p>
                    <Button 
                      className="amazon-btn w-100" 
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-cart me-2"></i>
                      Buy on Amazon
                    </Button>
                  </div>
                  <div className="amazon-badge">
                    <i className="bi bi-amazon"></i>
                  </div>
                  <div className="book-glow"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Literary Quote */}
      <section className="poet-quote-section">
        <Container>
          <div className="poet-quote-content" data-aos="fade-up">
            <div className="poet-quote">
              Poetry is the language we whisper when the world becomes too loud — 
              where silence holds more truth than a thousand spoken words.
            </div>
            <div className="text-center mt-4">
              <small className="text-muted">
                <i className="bi bi-dash-lg"></i> Ralph Ulysse <i className="bi bi-dash-lg"></i>
              </small>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer
        className="text-white py-5"
        style={{ backgroundColor: "#131a33" }}
      >
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h4 style={{ fontFamily: "Cormorant Garamond" }}>Zewo</h4>
              <p style={{ color: "#ccc" }}>Build. Code. Write.</p>
            </Col>
            <Col md={4} className="mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled" style={{ color: "#aaa" }}>
                <li>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/engineer" className="text-white">
                    Engineer
                  </a>
                </li>
                <li>
                  <a href="/solar" className="text-white">
                    Solar Energy
                  </a>
                </li>
                <li>
                  <a href="/builder" className="text-white">
                    Builder
                  </a>
                </li>
                <li>
                  <a href="/poet" className="text-white">
                    Blog & Poetry
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact</h5>
              <p>Email: your@email.com</p>
              <p>Phone: (787) 555-1234</p>
              <div className="d-flex gap-3 fs-4">
                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://github.com/yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://facebook.com/yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://youtube.com/@yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </Col>
          </Row>
          <p className="text-center mt-4 small text-muted">
            &copy; {new Date().getFullYear()} Zewo by Ralph Ulysse
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Poet;