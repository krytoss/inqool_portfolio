import { addDoc, Timestamp } from "firebase/firestore";
import { FC, useState } from "react";
import useField from "../hooks/useField";
import { projectsCollection } from "../utils/firebase";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import TagInput from "./TagInput";
import TextArea from "./TextArea";

type Props = {
    openModal: boolean,
    setOpenModal: (open : boolean) => void,
}

const ProjectModal : FC<Props> = ({ openModal, setOpenModal }) => {

    const [ tags, setTags ] = useState<Array<string>>([])
    const [ submitError, setSubmitError ] = useState<string>('')
    const [ submitting, setSubmitting ] = useState<boolean>(false)

    const [ title, titleProps ] = useField('title', true)
    const [ description, descriptionProps ] = useField('description', true)

    const handleSubmit = async () => {
        if (!submitting) {
            try {
                setSubmitting(true)
                await addDoc(projectsCollection, {
                    title: title,
                    description: description,
                    tags: tags,
                    created: Timestamp.now()
                }).then(() => setSubmitting(false))
                setOpenModal(false)
            } catch (err) {
                setSubmitError(
                    (err as { message?: string })?.message ?? 'Unknown error occurred'
                );
            }
        }
    }

    return (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
            { submitError }
            <Input label='Názov projektu' type='text' name='title' className='input--fullWidth' {...titleProps}/>
            <br />
            <TagInput tags={tags} setTags={setTags}/>
            <br />
            <TextArea label='Popis projektu' name='description' cols={30} rows={3} {...descriptionProps}/>
            <br />
            <div className='text-center'>
                <Button className={'button--smallRadius' + (submitting ? ' button--disabled button--loading' : '')} onClick={handleSubmit}>Pridať</Button>
            </div>
        </Modal>
    )

}

export default ProjectModal