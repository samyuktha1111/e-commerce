import React from 'react';
import { useSelector } from 'react-redux';
import { StateProps } from '../CartReducer';
const Notes = () => {
	const notes = useSelector((state: StateProps) => state.notes);
	return (
		<div className="border-2 ">
			<div className="grid grid-flow-row gap-2 ">
				{notes.map((note, index) => (
					<div className="text-lg text-black font-medium py-2 row-span-3">
						{index + 1}. {note}
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;
