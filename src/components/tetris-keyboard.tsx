import React from 'react';
import Button from 'react-bootstrap/Button';

/** ???
 * работа с пропсами, как более изящно предовать и определять типы пропсов
 * с параметрами понятно props.data: sting
 * если в пропсы передаем kalback?
 * */

/** простой компонент рисует навигацию и эмитит на верх навигационное событие */
const TetrisKeyboard = ( props: any ) => {

  /** ???
   *  как вызывать в разных случаях методы из шаблона
   * {method} - вызов без параметров ???
   * {() => method(1) } вызов методов с параметрами через стрелочную функцию??
   * */

  /** ???
   * в чем разница для использования function и () = >
   * могу например, везде использовать стрелку?
   * */

  /** событие управления */
  const actionDetect = (param: string) => {
    props.keyboardAction(param)
  }

  return (
    <div>
      <Button onClick={() => actionDetect('left')} variant="success">{'<'}</Button>{' '}
      <Button onClick={() => actionDetect('down')} variant="warning">{'||'}</Button>{' '}
      <Button onClick={() => actionDetect('right')} variant="success">{'>'}</Button>{' '}
      <Button onClick={() => actionDetect('revers')} variant="warning">{'()'}</Button>{' '}
    </div>
  );
};

export default TetrisKeyboard;
