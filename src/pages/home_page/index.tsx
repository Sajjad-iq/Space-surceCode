import Article from '../../components/common/Article';
import Button from '../../components/common/Button';

const Home = () => {
  return (
    <section className='home'>
      <section className='home-wrapper'>
        <Article
          presentation="SO, YOU WANT TO TRAVEL TO"
          header="SPACE"
          description="
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
        />
        <Button btnName="EXPLORE" linkTo="/DESTINATION" />
      </section>

    </section>
  )
}

export default Home