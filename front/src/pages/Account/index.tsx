import React from 'react'
import type { RootState } from 'store'
import { useSelector } from 'react-redux'
import Box from 'components/base/Box'
import styles from './Account.module.scss'

const Account: React.FC = () => {
    const userInfo = useSelector((state: RootState) => state.userInfo)
    const appLoading = useSelector((state: RootState) => state.appLoading)

    return (
        <>
            {
                !appLoading && (
                    <Box className={styles.box}>
                        <div>Hello friend!</div>
                    </Box>
                )
            }
        </>

    )
}

export default Account