import {DragIcon,ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {useRef} from 'react';
import {useDrop, useDrag} from 'react-dnd';
import styles from './element.module.css';
import {ELEMENT_REMOVE} from '../../../services/actions/actions';
import {useDispatch} from 'react-redux';

export const Element = ({item, index, moveListItem}) =>{
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: 'item',
    item: {index},
    collect: (monitor) => ({isDragging: monitor.isDragging()})
  })
  const [, dropRef] = useDrop({
    accept: 'item',
      hover: (item, monitor) => {
        const dragIndex = item.index
        const hoverIndex = index
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top
        if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
        if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return
          moveListItem(dragIndex, hoverIndex)
          item.index = hoverIndex}})
  const ref = useRef(null)
  const dragDropRef = dragRef(dropRef(ref))
  const removeIngredient =(item)=> {
    return dispatch({
      type: ELEMENT_REMOVE,
      id: item.id})}

  return(
    <li ref={dragDropRef} className={styles.list_element}> 
      <DragIcon type="primary" />
      <ConstructorElement
      text={item.name}
      price={item.price}
      thumbnail={item.image}
      handleClose = {() => removeIngredient(item)} 
      />
    </li>)
}