import React from 'react';
import { shallow } from 'enzyme'
import App from 'components/App';
import CommentBx from "components/CommentBx";
import CommentList from "components/CommentList";

it('shows a comment box', () => {
   const wrapped = shallow(<App />);

   expect(wrapped.find(CommentBx).length).toEqual(1);
});

it('shows a comment list', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentList).length).toEqual(1);
});
