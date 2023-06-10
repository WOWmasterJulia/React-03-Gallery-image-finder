import PropTypes from 'prop-types';
import css from './Searchbar.module.css'



// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>