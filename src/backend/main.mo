import Time "mo:core/Time";
import List "mo:core/List";

actor {
  type Enquiry = {
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    message : Text;
    timestamp : Int;
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, service : Text, message : Text) : async Text {
    let enquiry : Enquiry = {
      name;
      email;
      phone;
      service;
      message;
      timestamp = Time.now();
    };
    enquiries.add(enquiry);
    "Enquiry submitted successfully";
  };

  public query ({ caller }) func getEnquiries() : async [Enquiry] {
    enquiries.toArray();
  };

  public query ({ caller }) func getEnquiryCount() : async Nat {
    enquiries.size();
  };
};
