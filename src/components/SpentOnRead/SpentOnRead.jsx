import PropTypes from "prop-types";

const SpentOnRead = ({ props }) => {
  return (
    <div className="bg-blue-100 my-10 py-6 text-center border border-violet-800 rounded-lg">
      <h3 className="text-xl font-bold text-violet-800 leading-relaxed">
        Spent time on read : 177 min
      </h3>
    </div>
  );
};

SpentOnRead.propTypes = {};

export default SpentOnRead;
