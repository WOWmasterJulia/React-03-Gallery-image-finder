import PropTypes from 'prop-types';
import css from './Searchbar.module.css'



export const Searchbar = ({myonSubmit}) => (
  <>
    <header className={css.Searchbar}>
      <form className={css.Searchform} onSubmit={myonSubmit}>
        <button type="submit" className={css.SearchFormButton}>
        <span className={css.ButtonLabel}>Search</span>
        </button>

        <input
        className={css.SearchFormInput}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        />
      </form>
    </header>
  </>
)

Searchbar.propTypes = { 
  myonSubmit: PropTypes.func.isRequired
}