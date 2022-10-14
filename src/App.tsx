import { gql, useQuery } from "@apollo/client"
// import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title      
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  //WITHOUT useQuery Hook
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

  //WITH useQuery Hook
  const { data } = useQuery(GET_LESSONS_QUERY)  

  return (
    <ul>
      {data?.lessons.map((lesson:Lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}