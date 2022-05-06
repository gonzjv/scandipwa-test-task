import { PureComponent } from 'react';
import './CheckoutProcessBar.style';

export class CheckouProcessBar extends PureComponent {
  render() {
    return (
      <aside className="process-bar">
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line-middle"></div>
        <div className="circle"></div>
        <div className="line"></div>
      </aside>
    );
  }
}
