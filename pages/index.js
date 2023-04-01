import { getProperties } from "@/features/common/api/getProperties";
import FeaturedProperties from "@/features/Home/components/FeaturedProperties";
import HeroBanner from "@/features/Home/components/HeroBanner";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam";
import DefaultLayout from "@/features/Layouts/DefaultLayout";

export default function Home({ featuredProperties }) {

  return (
    <>
      <DefaultLayout>
        <HeroBanner />
        <FeaturedProperties featuredProperties={featuredProperties}/>
        <MeetTheTeam />
      </DefaultLayout>
    </>
  )
}


export async function getStaticProps() {
  const properties = await getProperties(5);

  return {
    props: { featuredProperties: properties }
  }
}