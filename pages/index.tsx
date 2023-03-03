import type {NextPage} from 'next'
import TopNav from "../components/TopNav";
import ContentWrapper from "../components/ContentWrapper";
import ProjectCard, {Project} from "../components/ProjectCard";
import useBlogPosts from "../hooks/useBlogPosts";


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

    const otherProjects : Project[] = [
        {
            name: "Android MySQL Connector",
            logo: "https://devso.io/images/logo.png",
            tag_line: "Open source native Android MySQL Connector",
            link: "https://github.com/BoardiesITSolutions/Android-MySQL-Connector"
        },
        {
            name: "DDHueAlert",
            logo: "https://github.com/BoardiesITSolutions/DDHueAlert/blob/master/logo.png?raw=true",
            tag_line: "Flash your Philips Hue bulbs based on state of your Datadog Monitors",
            link: "https://github.com/BoardiesITSolutions/DDHueAlert"
        }
    ]

    const {postsLoading, postsError, posts} = useBlogPosts();

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

              <h2>Other Projects</h2>
              <div className='flex flex-row'>
                  {
                      otherProjects.map(project => {
                          return <ProjectCard {...project} />
                      })
                  }
              </div>

          </ContentWrapper>
      </>
    )
}

export default Home
