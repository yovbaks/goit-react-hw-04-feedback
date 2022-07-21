import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notifications';
import Statistics from 'components/Statistics';
import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleInkremet = event => {
		const { name } = event.currentTarget;

		this.setState(prevState => ({
			[name]: prevState[name] + 1,
		}));
		
	};
  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
    console.log('Hello Good');
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
    console.log('Hello Bad');
  };
  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    console.log('Hello Neutral');
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
      
  };

    countPositiveFeedbackPercentage = () => {
      const { good } = this.state;
      let positiveFeedbackPercentage = (good / this.countTotalFeedback()) * 100;
      if (!positiveFeedbackPercentage) {
        positiveFeedbackPercentage = 0;
      }
      return Math.floor(positiveFeedbackPercentage);
    };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;
    console.log(total);
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#010101',
      }}>
        <Section title="Please live feedback">
          <FeedbackOptions
						options={['good', 'neutral', 'bad']}
						onLeaveFeedback={this.handleInkremet}
					/>
        {/* <FeedbackOptions
          clickBad={this.handleBad}
          clickGood={this.handleGood}
          clickNeutral={this.handleNeutral}
        /> */}
       </Section>
        
        <Section title="Statistics">
          {total() !== 0 ? (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}
        />
        ) : (
           <Notification message="There is no feedback" />
        )}
        </Section>
        
        
        
      </div>
    );
  }
}





