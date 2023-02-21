import style from './loader.module.css'

type LoaderProps = {
  loading?: boolean
}

const Loader = ({ loading = true }: LoaderProps) => {
  if (!loading) return null
  return <div className={style.loader}></div>
}

export default Loader
