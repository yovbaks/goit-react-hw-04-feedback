import { Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback  }) => (
  <div>
    {options.map(option =>  (
					<Button
						key={option}
						type="button"
						name={option}
						onClick={onLeaveFeedback}
					>
						{option}
					</Button>
				)
			)}
  </div>
);


// const FeedbackOptions = ({ clickGood, clickBad, clickNeutral }) => (
//   <div>
//     <Button onClick={clickGood}>Good</Button>
//     <Button onClick={clickNeutral}>Neutral</Button>
//     <Button onClick={clickBad}>Bad</Button>
//   </div>
// );

export default FeedbackOptions;