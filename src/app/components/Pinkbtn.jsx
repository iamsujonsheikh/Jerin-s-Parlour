import Link from 'next/link';
import PropTypes from 'prop-types';

const Pinkbtn = ({ label, href, width }) => {
    const commonStyles = 'py-2 px-6 text-slate-100 rounded-md bg-pink-500 hover:bg-pink-600 duration-500 active:bg-pink-400';

    if (href) {
        return (
            <Link
                href={href}
                className={`${commonStyles} ${width}`}
            >
                {label}
            </Link>
        );
    }

    return <button className={`${commonStyles} ${width}`}>{label}</button>;
};

Pinkbtn.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    width: PropTypes.string,
};

export default Pinkbtn;
