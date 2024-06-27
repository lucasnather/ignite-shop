import { styled } from "../../../stitches.config";


export const SectionContainer = styled('section', {

    display: 'flex',
    padding: '0 136px'
})

export const CardContainer = styled('div', {

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    width: '696px',
    height: '656px',
    background: 'linear-gradient(90deg, rgba(116,101,212,1) 0%, rgba(30,164,131,1) 35%)',
    borderRadius: '8px',
    padding: '4px',

    '& div': {
        backgroundColor: '$grayOpacity',
        padding: '24px',
        borderRadius: '8px'
    }

})
