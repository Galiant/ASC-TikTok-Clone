import Alert from "../alert";
import "./legal-notice.scss";

interface Props {
	setShowNotice: React.Dispatch<React.SetStateAction<boolean>>;
	isMobile?: boolean;
}

export default function LegalNotice({ setShowNotice, isMobile }: Props) {
	return (
		<Alert
			header="Notice"
			description={
				<>
					This open source project is not affiliated with TikTok or ByteDance in
					any way and should not be confused with the former.
					<br /> TikTok, TikTok logo and basically everything used here is a
					trademark of ByteDance.
				</>
			}
			containerClassName="legal-notice"
			primaryButtonText="Okay, got it"
			primaryButtonFn={() => setShowNotice(false)}
			isMobile={isMobile}
		/>
	);
}
