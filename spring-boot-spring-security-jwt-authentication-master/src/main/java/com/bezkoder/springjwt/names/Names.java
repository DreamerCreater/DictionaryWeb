package com.bezkoder.springjwt.names;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


 @Entity
 @Table(name="names")
 public class Names {
	@Id
	@GeneratedValue
	private Long id;
	
	
	private int isMon;
	private int isActive ;
	private String pos;
	private String meaning;
	private int aimag;
	private String addDesc;
	private Date addDate;
	private String delDesc;
	private Date delDate;
	private String mhUg;
	private String mhHelber1;
	private String tMhUg;
	private String mhBuleg;
	private int mhCheckType;
	private String egshig;
	private String mbUg;
	private String mbHelber1;
	private String tMbUg;
	private String mbBuleg ;
	private int mbCheckType;
	private String erEm;
	 protected Names() {
		   
	   }
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Names other = (Names) obj;
		if (id != other.id)
			return false;
		return true;
	}
	public Names(long id, int isMon, int isActive, String pos, String meaning, int aimag, String addDesc,
			Date addDate, String delDesc, Date delDate, String mhUg, String mhHelber1, String tMhUg, String mhBuleg,
			int mhCheckType, String egshig, String mbUg, String mbHelber1, String tMbUg, String mbBuleg,
			int mbCheckType, String erEm) {
		super();
		this.id = id;
		this.isMon = isMon;
		this.isActive = isActive;
		this.pos = pos;
		this.meaning = meaning;
		this.aimag = aimag;
		this.addDesc = addDesc;
		this.addDate = addDate;
		this.delDesc = delDesc;
		this.delDate = delDate;
		this.mhUg = mhUg;
		this.mhHelber1 = mhHelber1;
		this.tMhUg = tMhUg;
		this.mhBuleg = mhBuleg;
		this.mhCheckType = mhCheckType;
		this.egshig = egshig;
		this.mbUg = mbUg;
		this.mbHelber1 = mbHelber1;
		this.tMbUg = tMbUg;
		this.mbBuleg = mbBuleg;
		this.mbCheckType = mbCheckType;
		this.erEm = erEm;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getIsMon() {
		return isMon;
	}
	public void setIsMon(int isMon) {
		this.isMon = isMon;
	}
	public int getIsActive() {
		return isActive;
	}
	public void setIsActivate(int isActive) {
		this.isActive = isActive;
	}
	public String getPos() {
		return pos;
	}
	public void setPos(String pos) {
		this.pos = pos;
	}
	public String getMeaning() {
		return meaning;
	}
	public void setMeaning(String meaning) {
		this.meaning = meaning;
	}
	public int getAimag() {
		return aimag;
	}
	public void setAimag(int aimag) {
		this.aimag = aimag;
	}
	public String getAddDesc() {
		return addDesc;
	}
	public void setAddDesc(String addDesc) {
		this.addDesc = addDesc;
	}
	public Date getAddDate() {
		return addDate;
	}
	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}
	public String getDelDesc() {
		return delDesc;
	}
	public void setDelDesc(String delDesc) {
		this.delDesc = delDesc;
	}
	public Date getDelDate() {
		return delDate;
	}
	public void setDelDate(Date delDate) {
		this.delDate = delDate;
	}
	public String getMhUg() {
		return mhUg;
	}
	public void setMhUg(String mhUg) {
		this.mhUg = mhUg;
	}
	public String getMhHelber1() {
		return mhHelber1;
	}
	public void setMhHelber1(String mhHelber1) {
		this.mhHelber1 = mhHelber1;
	}
	public String gettMhUg() {
		return tMhUg;
	}
	public void settMhUg(String tMhUg) {
		this.tMhUg = tMhUg;
	}
	public String getMhBuleg() {
		return mhBuleg;
	}
	public void setMhBuleg(String mhBuleg) {
		this.mhBuleg = mhBuleg;
	}
	public int getMhCheckType() {
		return mhCheckType;
	}
	public void setMhCheckType(int mhCheckType) {
		this.mhCheckType = mhCheckType;
	}
	public String getEgshig() {
		return egshig;
	}
	public void setEgshig(String egshig) {
		this.egshig = egshig;
	}
	public String getMbUg() {
		return mbUg;
	}
	public void setMbUg(String mbUg) {
		this.mbUg = mbUg;
	}
	public String getMbHelber1() {
		return mbHelber1;
	}
	public void setMbHelber1(String mbHelber1) {
		this.mbHelber1 = mbHelber1;
	}
	public String gettMbUg() {
		return tMbUg;
	}
	public void settMbUg(String tMbUg) {
		this.tMbUg = tMbUg;
	}
	public String getMbBuleg() {
		return mbBuleg;
	}
	public void setMbBuleg(String mbBuleg) {
		this.mbBuleg = mbBuleg;
	}
	public int getMbCheckType() {
		return mbCheckType;
	}
	public void setMbCheckType(int mbCheckType) {
		this.mbCheckType = mbCheckType;
	}
	public String getErEm() {
		return erEm;
	}
	public void setErEm(String erEm) {
		this.erEm = erEm;
	}
	
	

}
