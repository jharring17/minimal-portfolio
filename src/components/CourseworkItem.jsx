import React from 'react';

function CourseworkItem({ course }) {
	return (
		<p className="text-xl cursor-default bg-black hover:bg-white text-white hover:text-black hover:opacity-50 drop-shadow-lg hover:drop-shadow-xl inline-block mx-2 my-2 px-2 py-1 font-semibold border-2 rounded-lg border-stone-900">
			{course}
		</p>
	);
}

export default CourseworkItem;
