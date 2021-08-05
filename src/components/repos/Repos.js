import RepoItem from './RepoItem'

const Repos = ({repos}) => {

  return (
    <div className="card card-body my-5">
      <h1>Latest Repos</h1>

      {repos.map(repo => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default Repos
