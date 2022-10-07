import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Box from 'components/base/Box'

const useStyles = makeStyles({
    box: {
        width: '100%',
        minWidth: 320,
        maxWidth: 600,
        padding: "16px 24px 24px"
    }
})

const Account = () => {
    const classes = useStyles()
    const userInfo = useSelector(state => state.userInfo)
    const appLoading = useSelector(state => state.appLoading)

    return (
        !appLoading && (
            <Box className={classes.box}>
                <div>Hello friend!</div>
            </Box>
        )
    )
}

export default Account