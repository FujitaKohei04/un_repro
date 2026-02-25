import * as styles from './UserAvatar.css';


type AvatarProps = {
  src?: string;
  status: string;
  fallback: string; // 画像がない時の名前（例: "佐藤"）
};

export const UserAvatar = ({ src, status, fallback }: AvatarProps) => {
  return (
    <div className={styles.avatarBase({state: status})}>
      {src ? (
        <img src={src} alt={fallback} className="h-full w-full object-cover" />
      ) : (
        <span className={styles.noImageAvatar}>
          {fallback.slice(0, 1)} {/* 名前の1文字目だけ表示 */}
        </span>
      )}
    </div>
  );
};