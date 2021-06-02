

const RepoItem = ({repo}) => {

  const {name, description, language, forks_count, watchers_count, html_url, stargazers_count } = repo


  return (
    <div className="card my-3">
      <div className="card-body">
        <h4 className="fw-bold card-title">{name}</h4>
        <p className="card-text">{description}</p>

        <div>
          {language && <span className="badge bg-info me-2"><strong>Language : </strong>{language}</span>}
          <span className="badge bg-danger me-2"><strong>Forks : </strong>{forks_count}</span>
          <span className="badge bg-secondary me-2"><strong>Stars : </strong>{stargazers_count}</span>
          <span className="badge bg-warning"><strong>Watchers : </strong>{watchers_count}</span>
        </div>

        <a role="button" href={html_url} className="mt-3 btn btn-success card-link">Go to repo</a>
      </div>
    </div>
  )
}

export default RepoItem
