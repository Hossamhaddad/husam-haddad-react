import React from 'react';
import PropTypes from 'prop-types';
import HiddenDiv, {
  SelectParagraph,
  SelectItem,
  Option,
  Form,
} from 'componenets/UI/Select/select.styles';
/**
 * Render Form element.
 *
 * @return {JSX.element}
 */
function Select({ onChange }) {
  return (
    <HiddenDiv>
      <SelectParagraph>Sort result By</SelectParagraph>
      <Form>
        <SelectItem onChange={onChange} name="sort">
          <Option value="popularity.desc">Popularity Descending</Option>
          <Option value="popularity.asc">Popularity Ascending</Option>
          <Option value="vote_average.desc">Rating Descending</Option>
          <Option value="vote_average.asc">Rating Ascending</Option>
          <Option value="release_date.desc">Release Date Descending</Option>
          <Option value="release_date.asc">Release Date Ascending</Option>
          <Option value="original_title.asc">Title (A-Z)</Option>
          <Option value="original_title.desc">Title (Z-A)</Option>
        </SelectItem>
      </Form>
    </HiddenDiv>
  );
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Select;