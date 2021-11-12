import { Button, Flex } from '@fluentui/react-northstar'
import React from 'react'
import { SkypeLogoIcon } from '@fluentui/react-northstar'

const HeaderComponent: React.FC<{}> = () => {
    return (
        <Flex gap="gap.small" debug>
            <Button content="Logo" icon={<SkypeLogoIcon />} />
            <Flex.Item push>
                <Button content="Page 1" />
            </Flex.Item>
            <Button content="Page 2" />
            <Button content="Page 3" />
        </Flex>
    )
}

export default HeaderComponent
