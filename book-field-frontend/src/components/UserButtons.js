import './userButtons.css'

function UserButtons() {
    return (
        <div className='user-buttons-container'>
            <button type='button' id='saved'>Saved</button>
            <button type='button' id='login'>Google login</button>
        </div>
    );
}

export default UserButtons;