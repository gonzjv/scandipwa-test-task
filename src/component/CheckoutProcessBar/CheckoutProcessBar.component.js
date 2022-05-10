import { PureComponent } from 'react';
import './CheckoutProcessBar.style';

export class CheckouProcessBar extends PureComponent {
  render() {
    const { checkoutStep, stepMap } = this.props;
    const lastStep = Object.keys(stepMap).at(-1);
    // const { [lastStep], ...stepMapWithoutLast } = stepMap;

    return (
      <aside className="process-bar">
        {console.log('checkoutStep', checkoutStep)}
        {console.log('stepMap', stepMap)}
        {Object.keys(stepMap).map((step) => {
          const stepFirstWord = stepMap[step].title.split(' ')[0];
          const stepNumber = Object.keys(stepMap).indexOf(step) + 1;
          const currentStepIndex =
            Object.keys(stepMap).indexOf(checkoutStep);
          const stepIndex = Object.keys(stepMap).indexOf(step);

          const isStepCurrent = checkoutStep == step ? true : false;
          const isStepPassed =
            currentStepIndex > stepIndex ? true : false;

          if (step !== lastStep) {
            return (
              <div className="step">
                <div
                  className={
                    isStepCurrent || isStepPassed
                      ? 'line-passed'
                      : 'line'
                  }
                ></div>
                <div className="circle-wrap">
                  <div
                    className={
                      isStepPassed ? 'circle passed' : 'circle'
                    }
                  >
                    {isStepPassed ? 'v' : stepNumber}
                  </div>

                  <small>{stepFirstWord}</small>
                </div>
              </div>
            );
          }
        })}
        <div
          className={
            checkoutStep == lastStep ? 'line-passed' : 'line'
          }
        ></div>
      </aside>
    );
  }
}
