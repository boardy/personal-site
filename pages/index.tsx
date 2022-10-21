import type {NextPage} from 'next'
import TopNav from "../components/TopNav";
import ContentWrapper from "../components/ContentWrapper";
import ProjectCard, {Project} from "../components/ProjectCard";


const Home: NextPage = () => {

    const mainProjects : Project[] = [
        {
            name: "Test Track",
            logo: "https://test-track.io/images/logo.png",
            tag_line: "Throw away the spreadsheets and use a simple, clear and easy to follow test planning tracking service",
            link: "https://test-track.io"
        },
        {
            name: "Crash Catch",
            logo: "https://crashcatch.com/images/logo.png",
            tag_line: "Crash reporting for every developer, no matter your development stack",
            link: "https://crashcatch.com"
        }
    ]

    return (
      <>
          <TopNav />
          <ContentWrapper>
              <h2>My Main Projects</h2>
              <div className='flex flex-row'>
                  {
                      mainProjects.map(project => {
                          return <ProjectCard {...project} />
                      })
                  }
              </div>

          </ContentWrapper>
      </>
    )
}

export default Home
