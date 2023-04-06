import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit,
    error
})=>{
const {values,changeHandler,onSubmit} = useForm({
    comment: '',
},onCommentSubmit)
    return (
        <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={onSubmit}>
            <textarea name="comment" placeholder="Write your comment here..." value={values.comment} onChange={changeHandler}></textarea>
            {error && <p className="error">{error}</p>}
            <input className="btn submit" type="submit" value="Add Comment" />
        </form>
    </article>
    );
}