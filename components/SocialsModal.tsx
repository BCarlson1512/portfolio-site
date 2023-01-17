import SocialsButton from "../islands/SocialsButton.tsx"
import Social from "../types/Social.ts"

interface PageProps {
    socials: Social[]
}

export default function SocialsModal(props: PageProps) {
    return(
        <div class="flex flex-row justify-center items-center space-x-10 py-4">
            {props.socials.map(social => {
                return(
                    <SocialsButton 
                        img={social.img}
                        socialName={social.socialName}
                        socialLink={social.socialLink}
                        socialTag={social.socialTag}
                    />
                )
            })}
        </div>
    )
}