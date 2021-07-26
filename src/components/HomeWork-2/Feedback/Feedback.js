import { useState } from 'react';
import StatisticsFeedback from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const countPositiveFeedbackPercentage = () =>
    good ? Math.round((good * 100) / countTotalFeedback) : 0;

  const countTotalFeedback = good + neutral + bad;

  const handleIncrement = e => {
    const nameButton = e.currentTarget.textContent.toLocaleLowerCase();
    switch (nameButton) {
      case 'good':
        setGood(s => s + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Section title="Please leaven feedback">
      <FeedbackOptions
        options={{ good, bad, neutral }}
        onLeaveFeedback={handleIncrement}
      />

      <StatisticsFeedback
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countPositiveFeedbackPercentage = () =>
//     this.state.good
//       ? Math.round((this.state.good * 100) / this.countTotalFeedback())
//       : 0;

//   countTotalFeedback = () =>
//     this.state.good + this.state.neutral + this.state.bad;

//   handleIncrement = e => {
//     const btnName = e.currentTarget.textContent.toLowerCase();

//     Object.keys(this.state).forEach(key => {
//       if (btnName === key) {
//         this.setState(prevState => ({
//           [key]: prevState[key] + 1,
//         }));
//       }
//     });
//   };

//   render() {
//     return (
//       <Section title="Please leaven feedback">
//         <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={this.handleImcrement}
//         />

//         {}

//         <StatisticsFeedback
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         />
//       </Section>
//     );
//   }
// }

// export default Feedback;
