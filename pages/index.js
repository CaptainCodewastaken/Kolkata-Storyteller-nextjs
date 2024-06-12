// index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Story from '../components/Stories';
import clientPromise from '../lib/mongodb';

export default function Home({ stories }) {
  return (
    <div>
      <Navbar />
      <div>
        {/* Carousel component */}
      </div>
      <div>
        {stories.map(story => (
          <Story key={story._id} title={story.title} summary={story.summary}content={story.story} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('Blogs');
  const stories = await collection.find({}).toArray();
  return {
    props: {
      stories: JSON.parse(JSON.stringify(stories)),
    },
  };
}
