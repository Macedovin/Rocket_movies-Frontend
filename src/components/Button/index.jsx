import { Container } from './styles';

export function Button ({ title, isExclude = false, loading = false, icon: Icon, ...rest }) {
  return( 
    <Container 
      type="button"
      disabled={loading}
      isExclude={isExclude}
      {...rest}
    >
      {Icon && <Icon size={16} />}
      { loading ? 'Carregando...' : title }
    </Container>
  )
}