import PropTypes from 'prop-types';
import css from './Button.module.css'

// При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими. Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. Если массив изображений пуст, кнопка не рендерится.
export const Button = ({}) => (
    <button type="button">Load More</button>
)



// Searchbar.propTypes = { 
//   myonSubmit: PropTypes.func.isRequired
// }