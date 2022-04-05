import RepositoryItem from './RepositoryItem'

const repository = {
  name: 'unform',
  description: 'FOrms in React',
  link: 'https://github.com/unform/unform'
}

export default function RepositoryList() {
  return (
    <section>
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}